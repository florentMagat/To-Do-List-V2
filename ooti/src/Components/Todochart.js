import "./Todochart.css";

export default function Todochart() {
  return (
    <div className="main">
        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success" style={{width: "25%"}}>25%</div>
        </div>
        <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning text-dark" style={{width: "75%"}}>75%</div>
        </div>
    </div>
  )
}