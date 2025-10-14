import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { CookiesProvider } from 'react-cookie';
import NotFound from './components/NotFound';
import TermsAndConditions from './pages/TermsAndConditions';
import CloudServices from './pages/CloudServices';
import DevOpsAndSRE from './pages/DevOpsAndSRE';
import ConsultingAndAdvisory from './pages/ConsultingAndAdvisory';
import DevSecOpsAndSecurity from './pages/DevSecOpsAndSecurity';
import DataAndAIServices from './pages/DataAndAIServices';
import ResourceHiring from './pages/ResourceHiring';
import CloudPlatformDevelopmentAndManagement from './pages/sub-services/CloudPlatformDevelopmentAndManagement';
import CloudInfrastructureAndAutomation from './pages/sub-services/CloudInfrastructureAndAutomation';
import CloudMigrationAndModernization from './pages/sub-services/CloudMigrationAndModernization';
import CloudCostOptimizationAndPerformanceTuning from './pages/sub-services/CloudCostOptimizationAndPerformanceTuning';
import AutoScalingAndCloudPerformanceEngineering from './pages/sub-services/AutoScalingAndCloudPerformanceEngineering';
import MultiCloudAndHybridCloudSolutions from './pages/sub-services/MultiCloudAndHybridCloudSolutions';
import HireCloudEngineersArchitects from './pages/sub-services/HireCloudEngineersArchitects';
import DevOpsAutomationAndCICDPipelines from './pages/sub-services/DevOpsAutomationAndCICDPipelines';
import InfrastructureAsCodeAndConfigurationManagement from './pages/sub-services/InfrastructureAsCodeAndConfigurationManagement';
import SiteReliabilityEngineeringSolutions from './pages/sub-services/SiteReliabilityEngineeringSolutions';
import MonitoringObservabilityAndIncidentManagement from './pages/sub-services/MonitoringObservabilityAndIncidentManagement';
import ContainerizationAndKubernetesOrchestration from './pages/sub-services/ContainerizationAndKubernetesOrchestration';
import OnDemandScalabilityAndPerformanceTuning from './pages/sub-services/OnDemandScalabilityAndPerformanceTuning';
import HireDevOpsAndSREEngineers from './pages/sub-services/HireDevOpsAndSREEngineers';
import DevSecOpsImplementationAndSecurityAutomation from './pages/sub-services/DevSecOpsImplementationAndSecurityAutomation';
import CloudSecurityArchitectureAndCompliance from './pages/sub-services/CloudSecurityArchitectureAndCompliance';
import VulnerabilityManagementAndThreatDetection from './pages/sub-services/VulnerabilityManagementAndThreatDetection';
import SecurityAuditsAndPenetrationTesting from './pages/sub-services/SecurityAuditsAndPenetrationTesting';
import HireDevSecOpsAndSecurityExperts from './pages/sub-services/HireDevSecOpsAndSecurityExperts';
import CloudAndDevOpsConsulting from './pages/sub-services/CloudAndDevOpsConsulting';
import CloudStrategyArchitectureDesign from './pages/sub-services/CloudStrategyArchitectureDesign';
import TechnologyAssessmentAndRoadmapping from './pages/sub-services/TechnologyAssessmentAndRoadmapping';
import MigrationPlanningAndExecutionSupport from './pages/sub-services/MigrationPlanningAndExecutionSupport';
import HireCloudConsultants from './pages/sub-services/HireCloudConsultants';
import DataAugmentationAndEnrichment from './pages/sub-services/DataAugmentationAndEnrichment';
import DataAnalyticsAndVisualization from './pages/sub-services/DataAnalyticsAndVisualization';
import AIMLModelDeploymentonCloud from './pages/sub-services/AIMLModelDeploymentonCloud';
import HireDataScientistsAIEngineers from './pages/sub-services/HireDataScientistsAIEngineers';
import HireCloudEngineers from './pages/sub-services/HireCloudEngineers';
import HireCloudArchitects from './pages/sub-services/HireCloudArchitects';
import HireKubernetesDockerExperts from './pages/sub-services/HireKubernetesDockerExperts';
import HireDataAndAIEngineers from './pages/sub-services/HireDataAndAIEngineers';
import HireTechnicalConsultants from './pages/sub-services/HireTechnicalConsultants';


function App() {

  return (
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Root />} >
            {/*Main Pages*/}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="cloud-services" element={<CloudServices />} />
            <Route path="cloud-platform-development-and-management" element={<CloudPlatformDevelopmentAndManagement />} />
            <Route path="cloud-infrastructure-and-automation" element={<CloudInfrastructureAndAutomation />} />
            <Route path="cloud-migration-and-modernization" element={<CloudMigrationAndModernization />} />
            <Route path="cloud-cost-optimization-and-performance-tuning" element={<CloudCostOptimizationAndPerformanceTuning />} />
            <Route path="auto-scaling-and-cloud-performance-engineering" element={<AutoScalingAndCloudPerformanceEngineering />} />
            <Route path="multi-cloud-and-hybrid-cloud-solutions" element={<MultiCloudAndHybridCloudSolutions />} />
            <Route path="hire-cloud-engineers-architects" element={<HireCloudEngineersArchitects />} />
            
            <Route path="devops-and-sre" element={<DevOpsAndSRE />} />
            <Route path="devops-automation-and-ci-cd-pipelines" element={<DevOpsAutomationAndCICDPipelines />} />
            <Route path="infrastructure-as-code-and-configuration-management" element={<InfrastructureAsCodeAndConfigurationManagement />} />
            <Route path="site-reliability-engineering-solutions" element={<SiteReliabilityEngineeringSolutions />} />
            <Route path="monitoring-observability-and-incident-management" element={<MonitoringObservabilityAndIncidentManagement />} />
            <Route path="containerization-and-kubernetes-orchestration" element={<ContainerizationAndKubernetesOrchestration />} />
            <Route path="on-demand-scalability-and-performance-tuning" element={<OnDemandScalabilityAndPerformanceTuning />} />
            <Route path="hire-devops-and-sre-engineers" element={<HireDevOpsAndSREEngineers />} />

            <Route path="devsecops-and-security" element={<DevSecOpsAndSecurity />} />
            <Route path="devsecops-implementation-and-security-automation" element={<DevSecOpsImplementationAndSecurityAutomation />} />
            <Route path="cloud-security-architecture-and-compliance" element={<CloudSecurityArchitectureAndCompliance />} />
            <Route path="vulnerability-management-and-threat-detection" element={<VulnerabilityManagementAndThreatDetection />} />
            <Route path="security-audits-and-penetration-testing" element={<SecurityAuditsAndPenetrationTesting />} />
            <Route path="hire-devsecops-and-security-experts" element={<HireDevSecOpsAndSecurityExperts />} />

            <Route path="consulting-and-advisory" element={<ConsultingAndAdvisory />} />
            <Route path="cloud-and-devops-consulting" element={<CloudAndDevOpsConsulting />} />
            <Route path="cloud-strategy-and-architecture-design" element={<CloudStrategyArchitectureDesign />} />
            <Route path="technology-assessment-and-roadmapping" element={<TechnologyAssessmentAndRoadmapping />} />
            <Route path="migration-planning-and-execution-support" element={<MigrationPlanningAndExecutionSupport />} />
            <Route path="hire-cloud-consultants" element={<HireCloudConsultants />} />

            <Route path="data-and-ai-services" element={<DataAndAIServices />} />
            <Route path="data-augmentation-and-enrichment" element={<DataAugmentationAndEnrichment />} />
            <Route path="data-analytics-and-visualization" element={<DataAnalyticsAndVisualization />} />
            <Route path="ai-ml-model-deployment-on-cloud" element={<AIMLModelDeploymentonCloud />} />
            <Route path="hire-data-scientists-ai-engineers" element={<HireDataScientistsAIEngineers />} />

            <Route path="resource-hiring" element={<ResourceHiring />} />
            <Route path="hire-cloud-engineers" element={<HireCloudEngineers />} />
            <Route path="hire-devops-and-sre-engineers" element={<HireDevOpsAndSREEngineers />} />
            <Route path="hire-devsecops-and-security-experts" element={<HireDevSecOpsAndSecurityExperts />} />
            <Route path="hire-cloud-architects" element={<HireCloudArchitects />} />
            <Route path="hire-kubernetes-docker-experts" element={<HireKubernetesDockerExperts />} />
            <Route path="hire-data-and-ai-engineers" element={<HireDataAndAIEngineers />} />
            <Route path="hire-technical-consultants" element={<HireTechnicalConsultants />} />
            {/*Catch all - replace with 404 component if you have one*/}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
