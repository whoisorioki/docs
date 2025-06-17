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
    id: "getting-started",
    title: "Getting Started",
    icon: <FileText className="w-4 h-4" />,
    children: [
      {
        id: "installation",
        title: "Installation",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "quick-start",
        title: "Quick Start Guide",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "system-requirements",
        title: "System Requirements",
        icon: <FileText className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "user-management",
    title: "User Management",
    icon: <Users className="w-4 h-4" />,
    children: [
      {
        id: "user-roles",
        title: "User Roles & Permissions",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        id: "user-accounts",
        title: "Managing User Accounts",
        icon: <Users className="w-4 h-4" />,
      },
      {
        id: "authentication",
        title: "Authentication Setup",
        icon: <Shield className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "pos-operations",
    title: "POS Operations",
    icon: <CreditCard className="w-4 h-4" />,
    children: [
      {
        id: "sales-processing",
        title: "Sales Processing",
        icon: <CreditCard className="w-4 h-4" />,
      },
      {
        id: "payment-methods",
        title: "Payment Methods",
        icon: <CreditCard className="w-4 h-4" />,
      },
      {
        id: "refunds-returns",
        title: "Refunds & Returns",
        icon: <CreditCard className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting & Analytics",
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      {
        id: "sales-reports",
        title: "Sales Reports",
        icon: <BarChart3 className="w-4 h-4" />,
      },
      {
        id: "inventory-reports",
        title: "Inventory Reports",
        icon: <BarChart3 className="w-4 h-4" />,
      },
      {
        id: "custom-reports",
        title: "Custom Reports",
        icon: <BarChart3 className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "configuration",
    title: "System Configuration",
    icon: <Settings className="w-4 h-4" />,
    children: [
      {
        id: "general-settings",
        title: "General Settings",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        id: "tax-configuration",
        title: "Tax Configuration",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        id: "printer-setup",
        title: "Printer Setup",
        icon: <Settings className="w-4 h-4" />,
      },
    ],
  },
];

export default function Sidebar({
  onTopicSelect = () => {},
  selectedTopic = "installation",
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "getting-started",
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
