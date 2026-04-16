import { agent, tool } from "@21st-sdk/agent"
import { z } from "zod"

export default agent({
  model: "claude-sonnet-4-6",
  runtime: "claude-code",
  systemPrompt: "You are a helpful AI assistant.",

  // Controls what the agent can do without asking
  permissionMode: "bypassPermissions",
  maxTurns: 30,
  maxBudgetUsd: 2,

  tools: {
    searchDocs: tool({
      description: "Search documentation by query",
      inputSchema: z.object({
        query: z.string(),
        limit: z.number().optional(),
      }),
      execute: async ({ query, limit }) => {
        const results = await fetch(
          `https://api.example.com/search?q=${query}&limit=${limit ?? 5}`
        ).then((r) => r.json())
        return {
          content: [{ type: "text", text: JSON.stringify(results) }],
        }
      },
    }),
  },
})
