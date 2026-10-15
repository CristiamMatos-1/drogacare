"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff, Save, Sparkles } from "lucide-react";

type SectionItem = {
  id: string;
  name: string;
  type: string;
  status: "Publicado" | "Rascunho";
  visible: boolean;
};

const initialSections: SectionItem[] = [
  { id: "hero", name: "Hero Section", type: "hero", status: "Publicado", visible: true },
  { id: "diferenciais", name: "Diferenciais", type: "features", status: "Publicado", visible: true },
  { id: "formula", name: "Fórmulas e Serviços", type: "formulas", status: "Rascunho", visible: true },
  { id: "depoimentos", name: "Avaliações", type: "reviews", status: "Publicado", visible: true },
  { id: "faq", name: "FAQ", type: "faq", status: "Publicado", visible: true },
  { id: "footer", name: "Rodapé", type: "footer", status: "Publicado", visible: false },
];

function SortableSection({ section, onToggleVisibility }: { section: SectionItem; onToggleVisibility: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-soft ${
        isDragging ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Reordenar ${section.name}`}
          className="cursor-grab rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 active:cursor-grabbing"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={18} />
        </button>

        <div>
          <div className="text-lg font-bold text-brand-slate">{section.name}</div>
          <div className="text-xs uppercase tracking-[0.18em] text-brand-slate/55">{section.type}</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${section.status === "Publicado" ? "bg-brand-2253 text-brand-2466" : "bg-amber-100 text-amber-700"}`}>
          {section.status}
        </span>

        <button
          type="button"
          onClick={() => onToggleVisibility(section.id)}
          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-2 text-brand-slate transition hover:border-brand-blue hover:text-brand-blue"
          aria-label={section.visible ? "Ocultar seção" : "Mostrar seção"}
        >
          {section.visible ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>

        <Link href="/admin/sections/edit" className="button-secondary px-3 py-2 text-sm">
          Editar
        </Link>
      </div>
    </div>
  );
}

export default function SectionsPage() {
  const [sections, setSections] = useState(initialSections);
  const [saved, setSaved] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const totalVisible = useMemo(() => sections.filter((item) => item.visible).length, [sections]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSections((current) => {
      const oldIndex = current.findIndex((item) => item.id === active.id);
      const newIndex = current.findIndex((item) => item.id === over.id);
      return arrayMove(current, oldIndex, newIndex);
    });
  }

  function handleToggleVisibility(id: string) {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? { ...section, visible: !section.visible } : section,
      ),
    );
  }

  async function handleSave() {
    setSaved(true);
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/" }),
    });

    setTimeout(() => setSaved(false), 1800);
  }

  return (
    <div className="space-y-6">
      <div className="panel">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">CMS</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-slate">Editor de Seções</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-brand-2253 px-3 py-2 text-sm font-semibold text-brand-2466">
              {totalVisible} visíveis
            </div>
            <button type="button" onClick={handleSave} className="button-primary gap-2">
              <Save size={16} />
              {saved ? "Salvo" : "Salvar ordem"}
            </button>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-brand-slate">Seções públicas</h3>
            <p className="text-sm text-brand-slate/65">Arraste para reordenar o layout do site.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-2253 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-2466">
            <Sparkles size={14} />
            Live Preview
          </div>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {sections.map((section) => (
                <SortableSection key={section.id} section={section} onToggleVisibility={handleToggleVisibility} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
