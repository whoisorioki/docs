import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

interface ContentAreaProps {
  contentId?: string;
}

interface DocumentationContent {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  lastUpdated: string;
  tags: string[];
}

const documentationContent: Record<string, DocumentationContent> = {
  installation: {
    id: "installation",
    title: "Installation Guide",
    description: "Step-by-step instructions for installing CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Setup", "Installation"],
    content: (
      <div className="space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            Before installing CARGEN POS, ensure your system meets the minimum
            requirements.
          </AlertDescription>
        </Alert>

        <div>
          <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Windows 10 or later / macOS 10.15 or later / Ubuntu 18.04 or later
            </li>
            <li>Minimum 4GB RAM (8GB recommended)</li>
            <li>2GB available disk space</li>
            <li>Internet connection for activation and updates</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Installation Steps</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 1: Download the Installer</h4>
                <p className="text-gray-600">
                  Download the latest CARGEN POS installer from our official
                  website.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 2: Run the Installer</h4>
                <p className="text-gray-600">
                  Double-click the installer file and follow the on-screen
                  instructions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">
                  Step 3: Configure Initial Settings
                </h4>
                <p className="text-gray-600">
                  Set up your store information and basic configuration during
                  first launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "quick-start": {
    id: "quick-start",
    title: "Quick Start Guide",
    description: "Get up and running with CARGEN POS in minutes",
    lastUpdated: "2024-01-10",
    tags: ["Getting Started", "Tutorial"],
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">First Time Setup</h3>
          <p className="text-gray-700 mb-4">
            After installation, follow these steps to get your POS system ready
            for use:
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  1. Store Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Configure your store details, tax rates, and payment methods
                  in the Settings menu.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Product Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Add your products and services to the inventory management
                  system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Create user accounts for your staff with appropriate
                  permissions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    ),
  },
  "user-roles": {
    id: "user-roles",
    title: "User Roles & Permissions",
    description: "Understanding user roles and permission management",
    lastUpdated: "2024-01-12",
    tags: ["Security", "Users", "Permissions"],
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Available User Roles</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  Administrator
                  <Badge variant="destructive">Full Access</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Complete system access including configuration, user
                  management, and all POS functions.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>System configuration</li>
                  <li>User management</li>
                  <li>Financial reports</li>
                  <li>All POS operations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  Manager
                  <Badge variant="secondary">Limited Admin</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Access to most POS functions and basic reporting, but limited
                  system configuration.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>POS operations</li>
                  <li>Basic reports</li>
                  <li>Inventory management</li>
                  <li>Staff scheduling</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  Cashier
                  <Badge variant="outline">Basic Access</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Access to essential POS functions for processing sales and
                  basic customer service.
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside">
                  <li>Process sales</li>
                  <li>Handle returns</li>
                  <li>Customer lookup</li>
                  <li>Basic inventory queries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    ),
  },
  "sales-processing": {
    id: "sales-processing",
    title: "Sales Processing",
    description: "Complete guide to processing sales transactions",
    lastUpdated: "2024-01-08",
    tags: ["Sales", "Transactions", "POS"],
    content: (
      <div className="space-y-6">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Always verify customer information and payment details before
            completing transactions.
          </AlertDescription>
        </Alert>

        <div>
          <h3 className="text-lg font-semibold mb-3">Processing a Sale</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-2">1. Add Items to Cart</h4>
              <p className="text-sm text-gray-600">
                Scan barcodes or search for products to add them to the current
                transaction.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-2">
                2. Apply Discounts (if applicable)
              </h4>
              <p className="text-sm text-gray-600">
                Apply any promotional discounts or customer-specific pricing.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-2">3. Calculate Tax</h4>
              <p className="text-sm text-gray-600">
                Tax is automatically calculated based on your configured tax
                rates.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-2">4. Process Payment</h4>
              <p className="text-sm text-gray-600">
                Accept payment via cash, card, or other configured payment
                methods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-2">5. Print Receipt</h4>
              <p className="text-sm text-gray-600">
                Generate and print customer receipt with transaction details.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export default function ContentArea({
  contentId = "installation",
}: ContentAreaProps) {
  const content = documentationContent[contentId];

  if (!content) {
    return (
      <div className="flex-1 bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Content not found. Please select a topic from the sidebar.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white">
      <ScrollArea className="h-full">
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{content.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Last updated: {content.lastUpdated}</span>
              <div className="flex gap-2">
                {content.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">{content.content}</div>
        </div>
      </ScrollArea>
    </div>
  );
}
