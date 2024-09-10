import {
  FailureViewContainer,
  FailureImage,
  RetryButton,
  FailureMessage,
} from './styledComponents'

const FailureView = props => {
  const {fetchApi} = props
  return (
    <FailureViewContainer>
      <FailureImage
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg"
        alt="failure view"
      />
      <FailureMessage>Error occured during fetching data</FailureMessage>
      <RetryButton onClick={fetchApi}>Retry</RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
