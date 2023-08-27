import React, { useState } from "react";

const InputForm: React.FC = () => {
  const [waterVolume, setWaterVolume] = useState<number | "">("");
  const [chlorineLevels, setChlorineLevels] = useState<{
    desiredChlorineLevel: number | "";
    currentChlorineLevel: number | "";
  }>({
    desiredChlorineLevel: "",
    currentChlorineLevel: "",
  });
  const [chlorineConcentration, setChlorineConcentration] = useState<
    number | ""
  >("");
  const [result, setResult] = useState<number | null>(null);

  const calculateChlorineAmount = () => {
    if (
      typeof waterVolume !== "number" ||
      typeof chlorineLevels.desiredChlorineLevel !== "number" ||
      typeof chlorineLevels.currentChlorineLevel !== "number" ||
      typeof chlorineConcentration !== "number"
    ) {
      return;
    }

    const chlorineNeeded =
      ((chlorineLevels.desiredChlorineLevel -
        chlorineLevels.currentChlorineLevel) *
        waterVolume *
        1000) /
      chlorineConcentration;
    setResult(chlorineNeeded);
  };

  return (
    <div className="container mt-5">
      <div className="input-container">
        {/* Input fields */}
        <div className="row">
          <div className="col-md-4">
            <label>Water Volume (L)</label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              step="any"
              value={waterVolume}
              onChange={(e) => setWaterVolume(parseFloat(e.target.value))}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label>Current Chlorine Level (mg/L)</label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              step="any"
              value={chlorineLevels.currentChlorineLevel}
              onChange={(e) =>
                setChlorineLevels({
                  ...chlorineLevels,
                  currentChlorineLevel: parseFloat(e.target.value),
                })
              }
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label>Desired Chlorine Level (mg/L)</label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              step="any"
              value={chlorineLevels.desiredChlorineLevel}
              onChange={(e) =>
                setChlorineLevels({
                  ...chlorineLevels,
                  desiredChlorineLevel: parseFloat(e.target.value),
                })
              }
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label>Chlorine Concentration (mg/g or g/L)</label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              step="any"
              value={chlorineConcentration}
              onChange={(e) =>
                setChlorineConcentration(parseFloat(e.target.value))
              }
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <button
              onClick={calculateChlorineAmount}
              className="btn btn-primary"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Display result */}
        {result !== null && (
          <div className="row mt-3">
            <div className="col-md-12">
              <p className="result">
                Chlorine Needed: {result.toFixed(2)} grams
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;
