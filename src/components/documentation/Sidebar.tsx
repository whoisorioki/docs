import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Settings,
  Users,
  BarChart3,
  CreditCard,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  onTopicSelect?: (topicId: string) => void;
  selectedTopic?: string;
}

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    id: "overview",
    title: "Overview",
    icon: <FileText className="w-4 h-4" />,
    children: [
      {
        id: "system-overview",
        title: "System Overview",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "key-features",
        title: "Key Features",
        icon: <FileText className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "setup",
    title: "Installation & Setup",
    icon: <Settings className="w-4 h-4" />,
    children: [
      {
        id: "installation",
        title: "Installation",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        id: "getting-started",
        title: "Getting Started",
        icon: <Settings className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "modules",
    title: "System Modules",
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      {
        id: "system-modules",
        title: "Modules Explained",
        icon: <BarChart3 className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "guidance",
    title: "Best Practices & Support",
    icon: <Shield className="w-4 h-4" />,
    children: [
      {
        id: "best-practices",
        title: "Best Practices and Tips",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting and Support",
        icon: <Shield className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "security",
    title: "Compliance & Security",
    icon: <Shield className="w-4 h-4" />,
    children: [
      {
        id: "compliance-security",
        title: "Compliance and Security",
        icon: <Shield className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "reference",
    title: "Reference",
    icon: <FileText className="w-4 h-4" />,
    children: [
      {
        id: "appendices",
        title: "Appendices",
        icon: <FileText className="w-4 h-4" />,
      },
    ],
  },
];

export default function Sidebar({
  onTopicSelect = () => {},
  selectedTopic = "system-overview",
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "overview",
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const handleTopicClick = (topicId: string) => {
    onTopicSelect(topicId);
  };

  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">CARGEN POS</h1>
        <p className="text-sm text-gray-600 mt-1">Documentation</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {navigationItems.map((section) => (
            <Collapsible
              key={section.id}
              open={expandedSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto font-medium text-gray-700 hover:bg-gray-100"
                >
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4 mr-2" />
                  ) : (
                    <ChevronRight className="w-4 h-4 mr-2" />
                  )}
                  {section.icon}
                  <span className="ml-2">{section.title}</span>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="ml-6 mt-1 space-y-1">
                {section.children?.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start p-2 h-auto text-sm ${
                      selectedTopic === item.id
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => handleTopicClick(item.id)}
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
