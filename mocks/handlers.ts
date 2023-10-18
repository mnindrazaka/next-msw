import { rest } from "msw";

export const handlers = [
  rest.get("https://backend.dev/users", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          { id: 1, title: "Ramen Gatherkafe" },
          { id: 2, title: "Paman Tsubasa" },
        ],
        total: 100,
        skip: 0,
        limit: 30,
      })
    );
  }),
];
