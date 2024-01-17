class DogBreeder
  attr_reader :breed
  def initialize(breed: "")
    @breed = "#{breed}".downcase
  end

  def success?
    @breed.present? && result["status"]  == "success"
  end

  def error?
    @breed.present? && result["status"]  == "error"
  end

  def images(limit: 1)
    success? ? result.fetch("message", []).first(limit) : []
  end

  def error_message
    error? ? result.fetch("message", "") : ""
  end

  def as_json(options = {})
    {
      isError: error?,
      isSuccess: success?,
      images: images,
      errorMessage: error_message
    }
  end

  private

  def result
    @result ||= HTTParty.get("https://dog.ceo/api/breed/#{breed}/images")
  end
end
