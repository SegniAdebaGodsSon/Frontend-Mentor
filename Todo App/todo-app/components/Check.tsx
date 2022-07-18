import React from 'react';

interface Props {
    onClick?: Function;
    checked: boolean;
}

const Check: React.FC<Props> = ({ checked, onClick }) => {
    return (
        <div
            onClick={() => (onClick ? onClick() : '')}
            style={{
                backgroundImage:
                    'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
            }}
            className={`.2s .5s box-border h-5 w-5 cursor-pointer rounded-full transition ease-in hover:p-[1px]`}
        >
            <div
                className={`box-border flex h-full w-full items-center justify-center rounded-full
        ${
            checked
                ? 'border-none'
                : 'border border-lightTheme-light-grayish-blue bg-lightTheme-very-light-gray hover:border-none dark:border-darkTheme-dark-grayish-blue dark:bg-darkTheme-very-dark-desaturated-blue'
        } `}
            >
                {checked ? (
                    <img src='/svgs/icon-check.svg' alt='check image' />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};
export default Check;
