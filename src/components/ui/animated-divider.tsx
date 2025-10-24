import { motion } from 'framer-motion';

interface AnimatedDividerProps {
  gradientColors?: string[];
  height?: string | number;
  width?: string | number;
  animationDuration?: number;
  className?: string;
}

const AnimatedDivider = ({
  gradientColors = ['#91cb3e', '#ffffff', '#91cb3e'],
  height = 2,
  width = '100%',
  animationDuration = 3,
  className = ''
}: AnimatedDividerProps) => {
  // Create gradient string for the motion.div
  const gradientString = `linear-gradient(90deg, ${gradientColors.join(', ')})`;

  return (
    <div className={`overflow-hidden ${className}`} style={{ width, height: typeof height === 'number' ? `${height}px` : height }}>
      <motion.div
        className="h-full w-full"
        style={{
          background: gradientString,
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default AnimatedDivider;

// import { motion } from "framer-motion";

// export default function AnimatedDivider({
//   color = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
//   height = "h-[2px]",
//   width = "w-full",
//   duration = 2
// }) {
//   return (
//     <div className={`relative ${width} ${height} overflow-hidden rounded-full`}>
//       <motion.div
//         className={`absolute inset-0 ${color}`}
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "reverse",
//           duration: duration,
//           ease: "easeInOut"
//         }}
//       />
//     </div>
//   );
// }
