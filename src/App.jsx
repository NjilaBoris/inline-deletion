import React, { useRef, useState } from "react";
import { Edit, Copy, Star, Share2, Trash, MoreVertical } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useOnClickOutside } from "usehooks-ts";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const menu = [
    { label: "Edit", Icon: Edit },
    { label: "Duplicate", Icon: Copy },
    { label: "Favourite", Icon: Star },
    { label: "Share", Icon: Share2 },
  ];
  return (
    <main
      className="relative w-full min-h-screen flex items-start
     md:items-center justify-center px-4 py-10"
    >
      <div className="relative  flex items-center justify-center w-full max-w-xs">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ opacity: isOpen ? 0 : 1 }}
          onClick={() => setIsOpen((open) => !open)}
          transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
          className="cursor-pointer p-3 rounded-xl border hover:bg-neutral-300/20
           transition-colors duration-150 border-neutral-300 shadow-md"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <MoreVertical className="text-gray-500" />
          </motion.div>
        </motion.button>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <div
              className="absolute flex items-center justify-center size-full"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                  ease: [0.645, 0.045, 0.355, 1],
                }}
                layoutId="heading"
                className="w-full flex flex-col items-center border border-neutral-300 shadow-md rounded-2xl bg-neutral-100 overflow-hidden"
              >
                <div className="w-full py-1.5 px-3 bg-slate-50 border-neutral-300 border-b">
                  <span className="text-sm text-slate-500">More Options</span>
                </div>
                <div className="w-full flex flex-col p-2 py-2 gap-1">
                  {menu.map(({ label, Icon }) => (
                    <motion.button
                      whileHover={{ scale: 0.97 }}
                      key={label}
                      className={`flex items-center text-neutral-800/80 justify-start rounded-xl p-3 w-full hover:bg-neutral-300/20 transition-all duration-100 cursor-pointer`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-4" />
                      <span className="pt-0.5">{label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default App;
