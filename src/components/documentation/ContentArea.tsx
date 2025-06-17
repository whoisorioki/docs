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
  "system-overview": {
    id: "system-overview",
    title: "System Overview",
    description: "Comprehensive overview of CARGEN POS system capabilities",
    lastUpdated: "2024-01-15",
    tags: ["Overview", "Introduction"],
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-700 mb-4">
            CARGEN POS is a comprehensive, web-based application designed to
            streamline and integrate point-of-sale (POS), inventory, and
            accounting operations for businesses. The system is built to support
            multiple business entities and various physical locations under a
            single, unified platform, making it an ideal management solution for
            organizations like ROBIKINGS SARL that require a robust and scalable
            system.
          </p>
          <p className="text-gray-700">
            The application offers a centralized dashboard that provides
            real-time insights into sales, purchases, expenses, and overall
            financial health, enabling businesses to make informed, data-driven
            decisions.
          </p>
        </div>
      </div>
    ),
  },
  "key-features": {
    id: "key-features",
    title: "Key Features",
    description: "Comprehensive list of CARGEN POS features and capabilities",
    lastUpdated: "2024-01-15",
    tags: ["Features", "Capabilities"],
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 mb-4">
          CARGEN POS offers a wide array of features to cover all aspects of
          retail and business management:
        </p>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Business Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  Manage Business: Configure and manage multiple businesses and
                  store locations
                </li>
                <li>
                  Contacts Management: Maintain a comprehensive database of both
                  Customers and Suppliers
                </li>
                <li>
                  User & Role Management: Secure the system by assigning
                  specific roles and permissions to users
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Inventory & Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  Product Management: Detailed control over inventory, including
                  product variations, stock levels, and pricing
                </li>
                <li>
                  Print Barcode & Labels: Generate and print custom labels for
                  products
                </li>
                <li>
                  Advanced Settings: Manage brands, tax rates, units, product
                  categories, and more
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sales & Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  Purchase Management: Streamline the procurement process from
                  purchase requisitions to returns
                </li>
                <li>
                  Sales Management: Handle all sales activities, including
                  orders, invoices, POS transactions, and quotations
                </li>
                <li>
                  Expense Management: Track and categorize all business-related
                  expenses
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Accounting Module</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Charts of Accounts</li>
                <li>Journal Entries</li>
                <li>Account Transfers</li>
                <li>Budget Management</li>
                <li>Financial Reporting</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reports & Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Generate a variety of financial and operational reports for
                analysis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  installation: {
    id: "installation",
    title: "Installation",
    description: "Complete guide for deploying and installing CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Setup", "Installation", "Deployment"],
    content: (
      <div className="space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            For a complete guide on how to deploy and install CARGEN POS on your
            server, please refer to the official installation documentation
            available at our website.
          </AlertDescription>
        </Alert>
        <div>
          <p className="text-gray-700">
            The installation process involves setting up the web-based
            application on your server infrastructure. Contact our support team
            for detailed installation instructions specific to your environment.
          </p>
        </div>
      </div>
    ),
  },
  "getting-started": {
    id: "getting-started",
    title: "Getting Started",
    description: "Initial setup guide for CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Getting Started", "Setup"],
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 mb-4">
          This section will guide you through the initial setup required to
          start using CARGEN POS.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-3">
            4.1. Adding Your First Business/Shop
          </h3>
          <p className="text-gray-700 mb-4">
            Before you can perform any other actions, you must set up your
            primary business entity.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">
                  Step 1: Navigate to Administration
                </h4>
                <p className="text-gray-600">
                  Go to the Administration module.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 2: Business Settings</h4>
                <p className="text-gray-600">Click on Business Settings.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">
                  Step 3: Configure Business Information
                </h4>
                <p className="text-gray-600">
                  Fill in the required information, such as Business Name,
                  Currency, Timezone, and upload a company logo.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 4: Save Settings</h4>
                <p className="text-gray-600">
                  Save the settings to complete the setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">
            4.2. Managing Business Locations
          </h3>
          <p className="text-gray-700 mb-4">
            If your business operates from multiple locations (e.g., different
            branches or warehouses), you can add and manage them.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">
                  Step 1: Navigate to Administration
                </h4>
                <p className="text-gray-600">
                  Go to the Administration module.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 2: Business Locations</h4>
                <p className="text-gray-600">Select Business Locations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Step 3: Add Locations</h4>
                <p className="text-gray-600">
                  Click &quot;Add Location&quot; and fill in the details for
                  each branch, including name, address, and contact information.
                </p>
              </div>
            </div>
          </div>
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Each location will operate as a distinct entity for sales and
              inventory tracking.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    ),
  },
  "system-modules": {
    id: "system-modules",
    title: "System Modules Explained",
    description: "Detailed breakdown of each module available in CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Modules", "Features"],
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 mb-4">
          This section provides a detailed breakdown of each module available in
          CARGEN POS.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5.1. Administration</CardTitle>
              <CardDescription>
                This is the control center for your entire system. It allows you
                to configure global settings that affect all other modules.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Business Settings:</strong> Set up core details of
                  your business
                </li>
                <li>
                  <strong>Business Locations:</strong> Manage all your physical
                  stores or warehouses
                </li>
                <li>
                  <strong>Tax Rates:</strong> Define different tax rates (e.g.,
                  VAT, GST) to be applied during sales and purchases
                </li>
                <li>
                  <strong>Barcode Settings:</strong> Customize the format and
                  information included in your product barcodes
                </li>
                <li>
                  <strong>Invoice Settings:</strong> Configure the layout and
                  default content for your sales invoices
                </li>
                <li>
                  <strong>Approval Rules/Templates:</strong> Set up workflows
                  for transaction approvals
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5.2. Business Partners</CardTitle>
              <CardDescription>
                This module is your contact management hub.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Suppliers:</strong> Manage the list of vendors you
                  purchase goods from
                </li>
                <li>
                  <strong>Customers:</strong> Maintain a database of your
                  clients
                </li>
                <li>
                  <strong>Customer Groups:</strong> Group customers to assign
                  special discounts or pricing
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5.3. Inventory</CardTitle>
              <CardDescription>
                This module is for all product and stock-related activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>List Products / Add Product:</strong> Add new products
                  or view and edit existing ones
                </li>
                <li>
                  <strong>Print Labels:</strong> Generate and print
                  barcodes/labels for your products
                </li>
                <li>
                  <strong>Variations:</strong> Create product variations like
                  size, color, or material
                </li>
                <li>
                  <strong>Units, Categories, Brands:</strong> Organize products
                  by creating units of measure (e.g., Kg, Pcs), categories
                  (e.g., Electronics, Clothing), and brands
                </li>
                <li>
                  <strong>Warranties:</strong> Manage product warranties
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                5.4. Stock Transfers & Stock Adjustment
              </CardTitle>
              <CardDescription>
                These modules are extensions of inventory management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Stock Transfers:</strong> Move inventory between your
                  different business locations
                </li>
                <li>
                  <strong>Stock Adjustment:</strong> Make corrections to stock
                  levels due to damage, loss, or other discrepancies
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                5.5. Purchases A/P (Accounts Payable)
              </CardTitle>
              <CardDescription>
                This module handles all aspects of buying goods from suppliers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Purchase Requisition / Purchase Order:</strong> Create
                  and manage orders to your suppliers
                </li>
                <li>
                  <strong>List Purchases / Add Purchase:</strong> Record
                  incoming stock and generate purchase bills
                </li>
                <li>
                  <strong>List Purchase Return:</strong> Manage returns of goods
                  to your suppliers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                5.6. Sales A/R (Accounts Receivable)
              </CardTitle>
              <CardDescription>
                This module handles all customer-facing sales activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Sales Order / Add Quotation:</strong> Create sales
                  orders and quotations for customers
                </li>
                <li>
                  <strong>All Invoices / Add Invoice:</strong> Generate and
                  manage customer invoices
                </li>
                <li>
                  <strong>POS (Point of Sale):</strong> Access the POS interface
                  for direct, in-store customer sales
                </li>
                <li>
                  <strong>Shipments:</strong> Track the delivery of products to
                  customers
                </li>
                <li>
                  <strong>List Sell Return:</strong> Manage returns of goods
                  from customers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5.7. Expenses</CardTitle>
              <CardDescription>
                This module is for tracking all non-purchase-related business
                costs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>List Expenses / Add Expense:</strong> Record and view
                  all business expenses
                </li>
                <li>
                  <strong>Expense Categories:</strong> Group expenses into
                  categories (e.g., Rent, Utilities, Salaries) for better
                  reporting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5.8. Financials</CardTitle>
              <CardDescription>
                This module provides a comprehensive overview of the financial
                health of your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>
                  <strong>List Accounts:</strong> View the Chart of Accounts
                </li>
                <li>
                  <strong>Balance Sheet:</strong> A snapshot of your company's
                  assets, liabilities, and equity
                </li>
                <li>
                  <strong>Trial Balance:</strong> A report of all account
                  balances to ensure debits equal credits
                </li>
                <li>
                  <strong>Cash Flow:</strong> Track the movement of cash in and
                  out of the business
                </li>
                <li>
                  <strong>Payment Account Report:</strong> View detailed reports
                  for specific payment accounts
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  "best-practices": {
    id: "best-practices",
    title: "Best Practices and Tips",
    description:
      "Helpful advice and best practices for using CARGEN POS effectively",
    lastUpdated: "2024-01-15",
    tags: ["Best Practices", "Tips"],
    content: (
      <div className="space-y-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Regularly Back up Your Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Although the system is secure, always maintain external backups
                to protect your business data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Use Roles and Permissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                To prevent unauthorized access, create specific user roles with
                limited permissions based on job responsibilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Keep Inventory Accurate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Perform regular stock takes using the Stock Adjustment feature
                to ensure your data is reliable and up-to-date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Categorize Everything
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Make full use of categories for products and expenses to get
                more insightful reports and better organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  troubleshooting: {
    id: "troubleshooting",
    title: "Troubleshooting and Support",
    description: "Common problems and solutions for CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Troubleshooting", "Support"],
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Problem: Unable to log in
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-medium mb-2">Solution:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>Check your internet connection</li>
                  <li>Ensure your username and password are correct</li>
                  <li>
                    Contact your system administrator to reset your password if
                    needed
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Problem: A specific report is not generating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-medium mb-2">Solution:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>
                    Ensure you have selected the correct date range and filters
                  </li>
                  <li>
                    Check if you have the necessary permissions to view the
                    report
                  </li>
                  <li>If the problem persists, contact support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            For further assistance, please contact our support team at your
            designated support email or portal.
          </AlertDescription>
        </Alert>
      </div>
    ),
  },
  "compliance-security": {
    id: "compliance-security",
    title: "Compliance and Security",
    description: "Security measures and compliance features in CARGEN POS",
    lastUpdated: "2024-01-15",
    tags: ["Security", "Compliance"],
    content: (
      <div className="space-y-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Role-Based Access Control (RBAC)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                CARGEN POS is equipped with role-based access control to ensure
                users only have access to features and data appropriate to their
                role.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Audit Trail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                All financial transactions are logged for audit trail purposes,
                ensuring complete transparency and accountability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                SSL Encryption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                The system supports the use of SSL for encrypted data
                transmission, protecting sensitive information during transfer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  appendices: {
    id: "appendices",
    title: "Appendices",
    description: "Glossary of terms and reference materials",
    lastUpdated: "2024-01-15",
    tags: ["Reference", "Glossary"],
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Glossary of Terms</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-1">POS</h4>
              <p className="text-sm text-gray-600">
                Point of Sale. The physical location where a transaction occurs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-1">A/P</h4>
              <p className="text-sm text-gray-600">
                Accounts Payable. Money owed by the business to its suppliers.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-1">A/R</h4>
              <p className="text-sm text-gray-600">
                Accounts Receivable. Money owed to the business by its
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export default function ContentArea({
  contentId = "system-overview",
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
