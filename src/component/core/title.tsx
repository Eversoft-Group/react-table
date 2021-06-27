import React from "react"

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className='col-sm-4'>
            <h2
                className='text-center'
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    )
}

export {
    Title
}