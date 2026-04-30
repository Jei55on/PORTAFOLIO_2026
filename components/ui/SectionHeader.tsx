type Props = {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeader({ label, title, subtitle, center }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <p className="text-xs font-semibold text-cyan-500 uppercase tracking-widest mb-3">
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className={`w-12 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
