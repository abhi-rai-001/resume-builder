import Image from "next/image";

export default function TemplateSelector({ templates, selectedTemplate, onSelectTemplate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`border rounded-lg overflow-hidden cursor-pointer transition-all
            ${selectedTemplate === template.id 
              ? 'ring-4 ring-blue-500 scale-105 shadow-lg' 
              : 'hover:shadow-md'}`}
          onClick={() => onSelectTemplate(template.id)}
        >
        


          
          <div className="p-3 bg-white">
            <h3 className="font-medium text-center">{template.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}