import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FaBookmark } from "react-icons/fa";
import { addFavorite, removeFavorite } from '../slice/book'

function BookmarkButton({ book }) {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [isFavorited, setIsFavorited] = useState(book.isFavorited ? true : false);

    const handleBookmark = (book) => {
        if(isFavorited) {
            dispatch(removeFavorite(book));
        } else {
            dispatch(addFavorite(book));
        }
    } 

    useEffect(() => {
      setIsFavorited(book.isFavorited ? true : false);
    }, [book])
    

    return (
        <button 
            onClick={() => handleBookmark(book)}
            className={"absolute top-2 right-2 rounded-lg p-2 hover:bg-purple-100 hover:text-purple-600 transition duration-300 ease-in-out" + (isFavorited ? " bg-purple-600 text-white" : "bg-gray-50 text-gray-500")}>
            {isFavorited ? (
                <FaBookmark/>
            ):(
                <FaBookmark/>
            )}
        </button>
    )
}

export default BookmarkButton