import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      toast({
        title: "复制成功",
        description: "已复制到剪贴板",
        variant: "default",
      })
      setTimeout(() => {
        setCopited(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={onCopy}
      className="inline-flex rounded-md p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <Copy
        size={16}
        className={`transition-all
        ${copied ? "scale-0" : "scale-100"}
      `}
      />
      <Check
        size={16}
        className={`absolute transition-all ${
          copied ? "scale-100" : "scale-0"
        }`}
      />
    </button>
  );
};

export default CopyButton;
