import { Router } from "express";

export default (container) => {
  const router = Router();
  const cartService = container.resolve("cartService");

  router.post("/cart", async (req, res) => {
    const { items } = req.body; // e.g., [{ id: "prod_123", quantity: 1 }]
    const cart = await cartService.create({
      sales_channel_id: "sc_01JNF5KACB63244PCWJX2P6PGY", // Your "In-Store" ID
      items: items.map(item => ({
        variant_id: item.id,
        quantity: item.quantity,
      })),
    });
    res.json(cart);
  });

  return router;
};
