import Link from 'next/link';
import React from 'react';

interface Props {
    id: string;
    name: string;
}

const BorderCountryLink: React.FC<Props> = ({ id, name }) => {
    return (
        <>
            <Link href={`/country/${id}`}>
                <div className="cursor-pointer font-semibold shadow-md px-6 py-1 text-center bg-white dark:bg-neutral-dark-blue hover:scale-[.98] hover:shadow-sm transition ease-in duration-150 rounded-md">
                    {name}
                </div>
            </Link>
        </>
    );
};
export default BorderCountryLink;
