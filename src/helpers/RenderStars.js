import { ReactComponent as FullStar } from '../assets/icons/fullstar-review.svg'
import { ReactComponent as EmptyStar } from '../assets/icons/emptystar-review.svg'

const RenderStars = (numberOfStar) => {
  switch (numberOfStar) {
    case 5:
      return (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
        </>
      )
    case 4:
      return (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
        </>
      )
    case 3:
      return (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
        </>
      )
    case 2:
      return (
        <>
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
        </>
      )
    default:
      return (
        <>
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
        </>
      )
  }
}

export default RenderStars
