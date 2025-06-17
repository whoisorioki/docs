import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ChevronRight } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  relevance: number;
}

interface SearchResultsProps {
  query?: string;
  results?: SearchResult[];
  onResultClick?: (resultId: string) => void;
}

const mockSearchResults: SearchResult[] = [
  {
    id: "installation",
    title: "Installation Guide",
    description:
      "Step-by-step instructions for installing CARGEN POS on your system",
    category: "Getting Started",
    tags: ["Setup", "Installation"],
    relevance: 95,
  },
  {
    id: "user-roles",
    title: "User Roles & Permissions",
    description:
      "Understanding user roles and permission management in CARGEN POS",
    category: "User Management",
    tags: ["Security", "Users", "Permissions"],
    relevance: 87,
  },
  {
    id: "sales-processing",
    title: "Sales Processing",
    description:
      "Complete guide to processing sales transactions and handling payments",
    category: "POS Operations",
    tags: ["Sales", "Transactions", "POS"],
    relevance: 82,
  },
  {
    id: "quick-start",
    title: "Quick Start Guide",
    description: "Get up and running with CARGEN POS in minutes",
    category: "Getting Started",
    tags: ["Getting Started", "Tutorial"],
    relevance: 78,
  },
];

export default function SearchResults({
  query = "installation",
  results = mockSearchResults,
  onResultClick = () => {},
}: SearchResultsProps) {
  const filteredResults = results.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase()),
      ),
  );

  if (filteredResults.length === 0) {
    return (
      <div className="bg-white p-8">
        <div className="text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No results found
          </h3>
          <p className="text-gray-600">
            No documentation found for &quot;{query}&quot;. Try searching with
            different keywords.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Search Results for &quot;{query}&quot;
        </h2>
        <p className="text-gray-600">
          Found {filteredResults.length} result
          {filteredResults.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="space-y-4">
        {filteredResults.map((result) => (
          <Card
            key={result.id}
            className="hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{result.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {result.description}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="ml-4">
                  {result.relevance}% match
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{result.category}</Badge>
                  <div className="flex gap-1">
                    {result.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {result.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{result.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onResultClick(result.id)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  View
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
