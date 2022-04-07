import React, { useState } from 'react'

export const Options = ({ option, setOption }) => {


	const handleOption = (opt) => [
		setOption(opt)
	]

	return (
		<div className='flex justify-center mt-14 gap-x-28 border-b-2'>
			<div className="flex flex-col justify-center text-center h-12 min-w-[5rem]">
				<a href="#" className="h-12 min-w-[5rem]"
					onClick={() => handleOption('all')}
				>
					All
				</a>

				{option == 'all'
					? <div className="h-1 w-20 bg-cyan-600 rounded-t-md"></div>
					: ''
				}

			</div>

			<div className="flex flex-col justify-center text-center h-12">
				<a href="#" className="h-12 min-w-[5rem]"
					onClick={() => handleOption('active')}
				>
					Active
				</a>

				{option == 'active'
					? <div className="h-1 w-20 bg-cyan-600 rounded-t-md"></div>
					: ''
				}
			</div>

			<div className="flex flex-col justify-center text-center h-12 min-w-[5rem]">
				<a href="#" className="h-12"
					onClick={() => handleOption('completed')}
				>
					Completed
				</a>

				{option == 'completed'
					? <div className="h-1 w-20 bg-cyan-600 rounded-t-md"></div>
					: ''
				}
			</div>
		</div>
	)
}
