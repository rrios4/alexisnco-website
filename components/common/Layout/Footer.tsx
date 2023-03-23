import { PaperPlaneIcon } from '@radix-ui/react-icons'

export default function SmallWithNavigation() {
    return (
        <div className="bg-blue-700 shadow-sm text-gray-200 px-[0] w-full pb-[2rem] pt-2 md:pt-0 md:pb-0 mt-[2rem] md:mt-0 bottom-0">
            <div className="flex flex-col md:flex-row md:justify-between justify-center p-4">
                <p className='mx-auto md:my-auto font-light'>© 2022 Alexis&Co. All rights reserved</p>
                <div className="flex flex-col md:flex-row space-x-6 space-y-2">
                    <div className="flex justify-center md:justify-end md:w-[220px] md:px-[4px]">
                        <p className='font-light my-auto py-2'>Subscribe for Newsletters</p>
                    </div>
                    <div className='flex space-x-4 md:my-auto justify-center'>
                        <input className="max-w-[400px] bg-gray-200 rounded-full focus:bg-gray-200 py-2 px-4 cursor-not-allowed" type={'text'} placeholder={'Your email address'} disabled/>
                        <div className='flex flex-col justify-center my-auto'>
                            <button disabled className="flex bg-yellow-300 text-black rounded-full p-3 hover:cursor-not-allowed opacity-70">
                                <PaperPlaneIcon />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}