require "rails_helper"

describe DogBreeder do
  let(:subject) { described_class.new(breed: breed) }
  describe "#images" do
    let(:url) { "dog.ceo/api/breed/#{breed}/images" }

    context 'success' do
      let(:breed) { "hound" }
      let(:response) { { "message" => [ "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg", "image2" ], "status" => "success" } }

      it 'fetches images successfully' do
        allow(HTTParty).to receive(:get).with(url).and_return(response)
        expect(subject.success?).to be_truthy
        expect(subject.images(limit: 2)).to eq response["message"]
      end
    end

    context 'error' do
      let(:breed) { "invalid" }
      let(:response) { { "status"=>"error", "message"=>"Breed not found (master breed does not exist)", "code"=>404 } }

      it 'returns error message' do
        allow(HTTParty).to receive(:get).with(url).and_return(response)
        expect(subject.error?).to be_truthy
        expect(subject.error_message).to be_present
      end
    end
  end
end
