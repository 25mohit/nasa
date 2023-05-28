import React from 'react'
import LayoutMain from '../Common/Layout/LayoutMain'
import Index from '../Bookmark/Index'
import BookmarkBody from '../Bookmark/BookmarkBody'

const Bookmark = () => {
  return (
    <LayoutMain>
        <div className="bookmark flex-between">
            <Index />
            <BookmarkBody />
        </div>
    </LayoutMain>
  )
}

export default Bookmark