import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const activities = [
    {
        title: "County Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Hiking",
                activitycaption: "Enjoy.",
                up: true,
                amount: 3
            },
            {
                title: "Cultural Experience",
                activityname: "Museum Tour",
                activitycaption: "Discover",
                up: true,
                amount: 3
            },
            {
                title: "Wellness Retreat",
                activityname: "Yoga Session",
                activitycaption: "Rejuvenate",
                up: false,
                amount: 2
            },
            {
                title: "Culinary Delight",
                activityname: "Cooking Class",
                activitycaption: "Learn",
                up: true,
                amount: 3

            },
            {
                title: "Thrilling Excursion",
                activityname: "Zip Line Adventure",
                activitycaption: "Experience",
                up: true,
                amount: 3
            }
        ]
    },
    {
        title: "Daily Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Hiking",
                activitycaption: "Enjoy.",
                up:true,
                amount:3
            },
            {
                title: "Cultural Experience",
                activityname: "Museum Tour",
                activitycaption: "Discover",
                up:true,
                amount:3
            },
            {
                title: "Wellness Retreat",
                activityname: "Yoga Session",
                activitycaption: "Rejuvenate",
                up:true,
                amount:3
            },
            {
                title: "Culinary Delight",
                activityname: "Cooking Class",
                activitycaption: "Learn",
                up:true,
                amount:3
            },
            {
                title: "Thrilling Excursion",
                activityname: "Zip Line Adventure",
                activitycaption: "Experience",
                up:false,
                amount:1
            }
        ]
    }
];

const ActivitiesCard = () => {
    return (
        <div className='md:grid md:grid-cols-2 gap-4'>
            {activities.map(activity => (
                <div className='shadow-md my-2 rounded-md bg-white p-4  col-span-1 w-full'>
                    <h3 className='text-gray-500 font-medium text-lg'>{activity.title}</h3>

                    {activity?.activities?.map(activity => (
                        <div className='ml-2'>

                            <div className='flex justify-between gap-2 mt-4'>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <p className='text-md font-bold text-black'>{activity.activityname}</p>
                                    <p className='text-md font-bold text-gray-500'>{activity.activitycaption}</p>
                                </div>

                                <div className=' flex flex-row justify-between items-center gap-2 text-black font-medium text-sm'>
                                    <p>{activity.amount}</p>
                                    {activity.up ? (<FaCaretUp className='text-green-600' />) : <FaCaretDown className='text-red-600' />
                                    }

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};

export default ActivitiesCard;
