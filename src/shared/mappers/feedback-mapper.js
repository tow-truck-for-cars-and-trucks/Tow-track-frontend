export function mapFeedbackDataToBackend(data) {
  return {
    score: data.score,
    comment: data.comment,
    order: data.order,
    ontime: data.onTime,
  };
}

export function mapFeedbackDataFromBackend(data) {
  return {
    score: data.score,
    comment: data.comment,
    name: data.name,
    order: data.order,
  };
}
