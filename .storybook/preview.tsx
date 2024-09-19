import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Foundations", "Components", "*"],
      },
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </RecoilRoot>
    ),
  ],
};

export default preview;
