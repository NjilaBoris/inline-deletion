import React, { useState } from "react";
import { Edit, Copy, Star, Share2, Trash, MoreVertical } from "lucide-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const menu = [
    { label: "Edit", Icon: Edit },
    { label: "Duplicate", Icon: Copy },
    { label: "Favourite", Icon: Star },
    { label: "Share", Icon: Share2 },
  ];
  return <div>App</div>;
};

export default App;
