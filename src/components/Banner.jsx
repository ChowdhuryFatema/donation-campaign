import PropTypes from 'prop-types';
import { Button, Input, Typography } from "@material-tailwind/react";

const Banner = ({value, setValue, handleSearch}) => {

    const clearInput = () => {
        setValue('')
    }

    return (
        <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 bg-[url('../images/banner.jpg')] bg-no-repeat bg-center bg-cover opacity-20">

            </div>
            <Typography variant="h2" className="text-center font-bold">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem] my-8">
                <Input
                    type="email"
                    label="Email Address"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color='red'
                    className="!absolute right-1 top-1 rounded"
                    onClick={() => {
                        handleSearch()
                        clearInput()
                    }}
                >
                   Search
                </Button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    handleSearch: PropTypes.func,
}
export default Banner;