import * as React from 'react';
import axios from 'axios';

export default function App() {
	const [users, setUsers] = React.useState(null);

	const getUsers = async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
		setUsers(data);
	};

	return (
		<div className='flex w-full min-h-dvh justify-center items-center bg-stone-950'>
			<div className='flex flex-col w-full sm:max-w-[600px] items-center gap-6 px-2 sm:px-0'>
				<h1 className='text-stone-200 text-3xl font-bold'>
					Hello <span className='decoration-teal-600 underline underline-offset-4'>INKOR</span>
				</h1>
				{users ? (
					<div className='h-[350px] aspect-video w-full bg-stone-900 rounded-lg p-4 scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-stone-950 overflow-y-scroll'>
						<pre className='text-stone-200'>{JSON.stringify(users, null, 2)}</pre>
					</div>
				) : (
					<div className='flex flex-col justify-between relative h-[350px] aspect-video w-full bg-stone-900 rounded-lg p-4 scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-stone-950 overflow-scroll'>
						{Array.from({ length: 12 }).map((_, i) => (
							<div key={i} className='w-full h-[15px] bg-stone-800 animate-pulse rounded'></div>
						))}
						<button
							className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-500 h-fit w-fit px-3 py-2 rounded'
							onClick={getUsers}
						>
							Load Content
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
