import React from 'react'
import NewsItem from './NewsItem'

function News() {
    const articles = [
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Doc Louallen",
          "title": "See winning numbers for Mega Millions July 28 jackpot - USA TODAY",
          "description": "There have been no Mega Millions jackpot winners since April, and thus the lottery's grand prize continues to grow.",
          "url": "https://www.usatoday.com/story/money/2023/07/28/mega-millions-numbers-july-28-jackpot/70490492007/",
          "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/01/07/USAT/4e55e924-7a69-4f17-81a2-83bbd1d48169-AP23006632807164.jpg?crop=7793,4384,x0,y779&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2023-07-29T03:04:49Z",
          "content": "The Mega Millions jackpot sits at an estimated $910 million with a $472.5 million cash option, the fifth-largest prize in the lottery's history.\r\nThere have been no Mega Millions jackpot winners sinc… [+1985 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MEG KINNARD, HANNAH FINGERHUT",
          "title": "Tim Scott attacks Ron DeSantis over Florida's slavery curriculum - The Associated Press",
          "description": "U.S. Sen. Tim Scott is criticizing fellow Republican presidential candidate and Florida Gov. Ron DeSantis for supporting standards requiring teachers to instruct middle school students that slaves developed skills that “could be applied for their personal ben…",
          "url": "https://apnews.com/article/election-2024-scott-desantis-slavery-school-curriculum-bbda4260ed074e699bb3f598b8547338",
          "urlToImage": "https://dims.apnews.com/dims4/default/d685b26/2147483647/strip/true/crop/5502x3095+0+287/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F95%2Fc7%2Fd43dfc453de2752fe631e90be2cb%2F9d86e9a8d02f487db4c66a1c05cfe265",
          "publishedAt": "2023-07-29T01:22:00Z",
          "content": "ANKENY, Iowa (AP) U.S. Sen. Tim Scott of South Carolina has criticized fellow Republican presidential candidate and Florida Gov. Ron DeSantis for supporting new standards that require teachers to ins… [+3016 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Alayna Treene, Zachary Cohen, Kristen Holmes, Randi Kaye, Christie Johnson",
          "title": "‘The family feels like he got trapped’: How a low-profile Mar-a-Lago employee got tangled up in Trump’s legal problems - CNN",
          "description": "A day after he was named as a co-defendant in the criminal case against Donald Trump for mishandling classified documents, a picture is starting to emerge of Carlos De Oliveira, the little known Mar-a-Lago employee accused of trying to delete security camera …",
          "url": "https://www.cnn.com/2023/07/28/politics/trump-maralago-indictment-carlos-de-oliveira/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230605143852-mar-a-lago-estate-220914.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-07-29T01:15:00Z",
          "content": "A day after he was named as a co-defendant in the criminal case against Donald Trump for mishandling classified documents, a picture is starting to emerge of Carlos De Oliveira, the little known Mar-… [+6317 chars]"
        },
        {
            "source": {
              "id": "usa-today",
              "name": "USA Today"
            },
            "author": "KiMi Robinson",
            "title": "Mandy Moore reveals 'resilient' son has rare skin condition - USA TODAY",
            "description": "Mandy Moore and Taylor Goldsmith's 2-year-old, August, has developed a \"crazy rash\" due to Gianotti Crosti syndrome, the actress shared on Instagram.",
            "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/07/28/mandy-moore-son-august-develops-gianotti-crosti-syndrome/70490023007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/07/29/USAT/70490197007-ap-19266032856783.jpg?crop=4616,2608,x0,y359&width=3200&height=1808&format=pjpg&auto=webp",
            "publishedAt": "2023-07-29T00:46:37Z",
            "content": "Mandy Moore and husband Taylor Goldsmith have raised a 2-year-old \"rockstar.\"\r\nMoore revealed in her Instagram Story on Friday that her son August has been dealing with a \"crazy rash\" for a week due … [+1909 chars]"
          }
    ]

  return (
    <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
            {articles.map((ele) => {
                return <div className="col-md-4" key={ele.url}>
                <NewsItem title={ele.title.slice(0,40)} description={ele.description.slice(0,80)} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
            </div>
            })}
        </div>
    </div>
  )
}

export default News