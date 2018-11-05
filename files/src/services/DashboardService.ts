import { DashboardClient, Dashboard } from '../ApiClient';
import { BASE_URL } from '../utils/Environment';

export default class DashbordService {
    public dashboardClient: DashboardClient;
    public constructor() {
        this.dashboardClient = new DashboardClient(BASE_URL);
    }

    public get(): Promise<Dashboard[] | null> {
        return this.dashboardClient.get();
    }
}