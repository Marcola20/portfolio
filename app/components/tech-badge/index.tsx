type TechBadgePropos = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgePropos) => {
    return(
        <span className="text-amber-200 bg-amber-400/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}