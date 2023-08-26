import Icon from "./Icon";

interface IconBtnProps {
  icon: string;
  onClick: () => void;
}

const IconBtn = ({ icon, onClick }: IconBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="h-10 w-10 flex items-center justify-center text-red bg-red-light rounded-[10px] hover:text-white hover:bg-red transition-colors"
    >
      <Icon icon={icon} size={20} />
    </button>
  );
};

export default IconBtn;
