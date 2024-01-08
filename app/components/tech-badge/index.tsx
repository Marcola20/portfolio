type TechBadgePropos = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgePropos) => {
    return(
        <span className="text-black bg-amber-200/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}