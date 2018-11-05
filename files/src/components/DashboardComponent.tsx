import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Dashboard } from '../ApiClient';

export default class DashboardComponent extends React.Component<{ dashboard: Dashboard[] }, {}> {
    public render() {
        let option = {
            labels: ['Team - 1'],
            datasets: [
                {
                    data: [10, 10, 30],
                    backgroundColor: ['#000'],
                    hoverBackgroundColor: ['#000']
                }
            ]
        };
        return (
            <div>
                {this.props.dashboard.map((dashboard: Dashboard) => {
                    return <div key={dashboard.projectId} className="col-sm-3">
                        <Doughnut data={option} />
                    </div>;
                })}
            </div>
        );
    }
}
