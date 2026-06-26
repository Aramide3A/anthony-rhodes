import {
  ArrowRight,
  BadgeCheck,
  Bug,
  Building2,
  Cable,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Circle,
  ClipboardCheck,
  Clock,
  Fan,
  Grid3X3,
  Hammer,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  ScanSearch,
  Send,
  ShieldCheck,
  Siren,
  Sparkles,
  TreePine,
  UsersRound,
  Wrench,
  X,
  Zap
} from "lucide-react";

function WhatsApp({ size = 22, className = "", ...props }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.05 4.91A9.9 9.9 0 0 0 12 2a9.98 9.98 0 0 0-8.65 15l-1.3 4.74 4.87-1.28A9.98 9.98 0 1 0 19.05 4.9Zm-7.05 15.4c-1.61 0-3.19-.43-4.56-1.23l-.33-.2-2.89.76.77-2.82-.21-.34a8.28 8.28 0 0 1 12.85-10.2 8.31 8.31 0 0 1-5.63 14.03Zm4.54-6.2c-.25-.13-1.48-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.2-.73-.65-1.22-1.45-1.36-1.7-.15-.25-.02-.39.11-.52.12-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.07-.13-.56-1.35-.77-1.85-.2-.47-.41-.41-.56-.42h-.48c-.16 0-.43.06-.65.31s-.85.83-.85 2.03.87 2.35.99 2.52c.12.17 1.72 2.63 4.17 3.68.58.25 1.04.39 1.39.5.58.18 1.1.16 1.52.1.46-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3Z"
      />
    </svg>
  );
}

const Icons = {
  ArrowRight,
  BadgeCheck,
  Bug,
  Building2,
  Cable,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Circle,
  ClipboardCheck,
  Clock,
  Fan,
  Grid3X3,
  Hammer,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  ScanSearch,
  Send,
  ShieldCheck,
  Siren,
  Sparkles,
  TreePine,
  UsersRound,
  WhatsApp,
  Wrench,
  X,
  Zap
};

export default function Icon({ name = "Circle", size = 22, className = "", ...props }) {
  const LucideIcon = Icons[name] || Icons.Circle;
  return <LucideIcon aria-hidden="true" size={size} className={className} {...props} />;
}
