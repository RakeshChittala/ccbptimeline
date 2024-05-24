// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <h1 className="heading">
        MY JOURNEY OF
        <span className="sub-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: 'red',
            secondary: 'black',
            cardBgColor: '#d05',
            cardForeColor: 'red',
            titleColor: '#092',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard details={eachItem} key={eachItem.id} />
            ) : (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
