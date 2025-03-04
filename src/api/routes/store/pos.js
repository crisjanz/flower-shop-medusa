import { Router } from "express";
export default (container) => {
  const router = Router();
  const cartService = container.resolve("cartService");
  router.post("/cart", async (req, res) => {
    try {
      const { items } = req.body;
      const cart = await cartService.create({
        sales_channel_id: "sc_01JNF5KACB63244PCWJX2P6PGY",
        items: items.map(item => ({
          variant_id: item.id,
          quantity: item.quantity,
        })),
      });
      res.json(cart);
    } catch (error) {
      console.error("Error creating cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  return router;
};