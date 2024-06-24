interface DropdownProps {
    iconColor?: string;
}

const DropdownIcon: React.FC<DropdownProps> = ({ iconColor }) => {
    return (
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill={iconColor ? iconColor : "#212121"} />
        </svg>

    )
}

export default DropdownIcon