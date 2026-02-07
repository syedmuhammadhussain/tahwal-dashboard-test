"use client";

import { useState } from "react";
import { ArrowUpDown, Send } from "lucide-react";

interface EvidenceDocument {
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: "Approved" | "Pending Review";
}

interface Comment {
  author: string;
  initial: string;
  date: string;
  text: string;
}

interface Activity {
  text: string;
  time: string;
}

interface EvidenceTabProps {
  documents: EvidenceDocument[];
  comments: Comment[];
  activities: Activity[];
}

const columns = [
  { key: "number", label: "Document Number" },
  { key: "name", label: "Document Name" },
  { key: "lead", label: "Document Lead" },
  { key: "preparer", label: "Document Preparer" },
  { key: "date", label: "Date" },
  { key: "dueDate", label: "Due Date" },
  { key: "status", label: "Status" },
];

export default function EvidenceTab({
  documents,
  comments,
  activities,
}: EvidenceTabProps) {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Documents Table */}
      <div className="section-card p-0 overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={col.key}
                  className={`px-4 lg:px-5 py-3.5 text-left text-[12px] font-semibold text-text-primary bg-[#F5F8FB]
                    ${idx === 0 ? "rounded-xl" : ""}
                    ${idx === columns.length - 1 ? "rounded-xl" : ""}
                  `}
                >
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-text-primary transition-colors">
                    {col.label}
                    <ArrowUpDown className="w-3 h-3 text-text-light" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, idx) => (
              <tr
                key={idx}
                className={`${idx === documents.length - 1 ? "" : "border-b border-[#F1F5F9]"} hover:bg-[#FAFBFC] transition-colors`}
              >
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.number}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.name}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.lead}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.preparer}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.date}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-sm text-text-primary">
                  {doc.dueDate}
                </td>
                <td className="px-4 lg:px-5 py-3.5 text-center">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-4xl ${
                      doc.status === "Approved"
                        ? "text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0]"
                        : "text-[#DC2626] bg-[#FFFBEB] border border-[#FDE68A]"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section: Comments + Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {/* Comments */}
        <div className="md:col-span-2 section-card">
          <h3 className="text-[15px] font-bold text-text-primary mb-4 lg:mb-5">
            Comments
          </h3>

          <div className="space-y-3 lg:space-y-4 mb-4">
            {comments.map((comment, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8ECF0] rounded-xl p-3 lg:p-4"
              >
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[var(--color-border)] text-[var(--color-text-secondary)] flex items-center justify-center text-[12px] lg:text-[14px] font-bold shrink-0">
                      {comment.initial}
                    </div>
                    <span className="text-[13px] lg:text-[14px] font-bold text-text-primary">
                      {comment.author}
                    </span>
                  </div>
                  <span className="text-[11px] lg:text-[12px] text-text-light shrink-0 ml-2">
                    {comment.date}
                  </span>
                </div>
                <p className="text-[12px] lg:text-[13px] text-text-primary leading-relaxed">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 lg:p-4 border border-[#E8ECF0] rounded-xl text-[13px] outline-none resize-y min-h-[90px] lg:min-h-[110px] focus:border-primary/30 transition-colors bg-white"
          />
          <button className="mt-3 inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-primary text-white text-[13px] font-semibold rounded-lg hover:bg-primary-light transition-colors">
            <Send className="w-4 h-4" />
            Post Comment
          </button>
        </div>

        {/* Recent Activities */}
        <div className="section-card">
          <h3 className="text-[15px] font-bold text-text-primary mb-4 lg:mb-5">
            Recent Activities
          </h3>
          <div className="space-y-5 lg:space-y-6">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-[5px] w-[9px] h-[9px] rounded-full bg-[#E63946] shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] lg:text-[13px] text-text-primary leading-[1.6] font-medium">
                    {activity.text}
                  </p>
                </div>
                <span className="text-[10px] lg:text-[11px] text-text-light whitespace-nowrap shrink-0 mt-[2px]">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
