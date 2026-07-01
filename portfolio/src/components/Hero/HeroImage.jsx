import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      className="col-lg-6 hero-right"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="profile-circle">

        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Laiba"
          alt="Laiba Portfolio"
        />

      </div>
    </motion.div>
  );
};

export default HeroImage;