import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "./documentation/Sidebar";
import ContentArea from "./documentation/ContentArea";
import SearchResults from "./documentation/SearchResults";

function Home() {
  const [selectedTopic, setSelectedTopic] = useState("installation");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearch(query.length > 0);
  };

  const handleSearchResultClick = (resultId: string) => {
    setSelectedTopic(resultId);
    setShowSearch(false);
    setSearchQuery("");
  };

  return (
    <div className="w-screen h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        onTopicSelect={handleTopicSelect}
        selectedTopic={selectedTopic}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setSearchQuery("");
                  setShowSearch(false);
                }}
              >
                ×
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        {showSearch ? (
          <SearchResults
            query={searchQuery}
            onResultClick={handleSearchResultClick}
          />
        ) : (
          <ContentArea contentId={selectedTopic} />
        )}
      </div>
    </div>
  );
}

export default Home;
