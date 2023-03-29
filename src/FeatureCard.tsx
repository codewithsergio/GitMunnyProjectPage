import "./FeatureCard.css";

interface AppProps {
  icon: string;
  description: string;
  feature: string;
}

function FeatureCard({ feature, description, icon }: AppProps) {
  return (
    <div className="featureCard">
      <span className="iconify iconifySkills" data-icon={`${icon}`}></span>
      <div>
        <h3>{feature}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
