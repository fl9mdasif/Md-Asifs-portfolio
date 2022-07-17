import React, { useState } from "react"
// import { Heading } from "../common/Heading"
import { portfolio } from "../../assest/data"
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import './projects.styles.css'
const allCategory = [...new Set(portfolio.map((item) => item.category)), "all"]
export const Portfolio = () => {

    const [list, setLists] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    // console.log(setCategory)

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)
        if (category === "all") {
            setLists(portfolio)
            return
        }
    }

    return (
        <>
            <article>
                <div className=''>
                    <h1 className="text-accent text-center text-4xl font-bold my-7 ">My Projects</h1>

                    {/* <Heading title='Portfolio' /> */}
                    <div className='cata flex justify-center flex-wrap projects text-center text-neutral pb-7'>
                        {category.map((category) => (
                            <button className='projects ' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className='content justify-center flex gap-4 rounded shadow-lg flex-wrap'>
                        {list.map((project) => (
                            <div className='box relative' data-aos='fade-up'>
                                <div className='img'>
                                    <img style={{ objectFit: 'fill' }} src={project.cover} alt='' />
                                </div>
                                <div className='overlay '>
                                    <div className=' flex gap-4 rounded text-neutral absolute bottom-12 font-bold text-lg'>

                                        <span>{project.name}</span>
                                    </div>
                                    <div className=' link flex capitalize gap-4 rounded absolute bottom-3'>

                                        <a target='blank' href={project.client} > Client</a >
                                        <a target='blank' href={project.liveSite} > Live Site</a >
                                        <a target='blank' href={project?.server} > Server</a >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}