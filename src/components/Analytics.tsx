import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Heart,
  Clock,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download
} from 'lucide-react';

interface AnalyticsProps {
  userRole: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ userRole }) => {
  const [timeRange, setTimeRange] = useState('30d');

  const getAnalyticsData = () => {
    switch (userRole) {
      case 'Doctor':
        return {
          metrics: [
            { title: 'Total Patients', value: '156', change: '+12%', trend: 'up', icon: Users },
            { title: 'Appointments', value: '89', change: '+8%', trend: 'up', icon: Calendar },
            { title: 'Patient Satisfaction', value: '4.9/5', change: '+0.2', trend: 'up', icon: Heart },
            { title: 'Avg. Consultation Time', value: '28 min', change: '-3 min', trend: 'down', icon: Clock }
          ],
          charts: [
            { title: 'Patient Visits', type: 'line', data: 'Monthly patient visit trends' },
            { title: 'Treatment Outcomes', type: 'bar', data: 'Success rates by treatment type' },
            { title: 'Patient Demographics', type: 'pie', data: 'Age and gender distribution' }
          ]
        };
      case 'Patient':
        return {
          metrics: [
            { title: 'Health Score', value: '95%', change: '+5%', trend: 'up', icon: Heart },
            { title: 'Appointments', value: '12', change: '0', trend: 'neutral', icon: Calendar },
            { title: 'Medications', value: '3', change: '-1', trend: 'down', icon: Activity },
            { title: 'Lab Results', value: '8', change: '+2', trend: 'up', icon: CheckCircle }
          ],
          charts: [
            { title: 'Health Trends', type: 'line', data: 'Your health metrics over time' },
            { title: 'Medication Adherence', type: 'bar', data: 'Compliance tracking' },
            { title: 'Appointment History', type: 'timeline', data: 'Visit frequency and types' }
          ]
        };
      case 'HR Manager':
        return {
          metrics: [
            { title: 'Total Staff', value: '245', change: '+5', trend: 'up', icon: Users },
            { title: 'Attendance Rate', value: '98.2%', change: '+1.2%', trend: 'up', icon: CheckCircle },
            { title: 'Performance Score', value: '4.7/5', change: '+0.3', trend: 'up', icon: Award },
            { title: 'Turnover Rate', value: '2.1%', change: '-0.5%', trend: 'down', icon: TrendingDown }
          ],
          charts: [
            { title: 'Staff Performance', type: 'bar', data: 'Department performance metrics' },
            { title: 'Recruitment Pipeline', type: 'funnel', data: 'Hiring process analytics' },
            { title: 'Training Completion', type: 'progress', data: 'Staff development tracking' }
          ]
        };
      case 'Admin':
        return {
          metrics: [
            { title: 'System Uptime', value: '99.9%', change: '0%', trend: 'neutral', icon: Activity },
            { title: 'Total Users', value: '1,247', change: '+23', trend: 'up', icon: Users },
            { title: 'Revenue', value: '$125K', change: '+15%', trend: 'up', icon: DollarSign },
            { title: 'Security Score', value: 'A+', change: '0', trend: 'neutral', icon: CheckCircle }
          ],
          charts: [
            { title: 'Platform Usage', type: 'line', data: 'User activity and engagement' },
            { title: 'Revenue Analytics', type: 'bar', data: 'Financial performance metrics' },
            { title: 'System Performance', type: 'gauge', data: 'Infrastructure monitoring' }
          ]
        };
      default:
        return { metrics: [], charts: [] };
    }
  };

  const getPageTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Practice Analytics';
      case 'Patient':
        return 'Health Analytics';
      case 'HR Manager':
        return 'HR Analytics';
      case 'Admin':
        return 'System Analytics';
      default:
        return 'Analytics';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Track your practice performance and patient outcomes';
      case 'Patient':
        return 'Monitor your health trends and medical history';
      case 'HR Manager':
        return 'Analyze staff performance and HR metrics';
      case 'Admin':
        return 'Monitor system performance and platform analytics';
      default:
        return 'View your analytics and insights';
    }
  };

  const { metrics, charts } = getAnalyticsData();

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
              <p className="text-gray-600">{getPageDescription()}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                {getTrendIcon(metric.trend)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.title}</p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-gray-500">vs last period</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {charts.map((chart, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">{chart.title}</h3>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Eye className="w-4 h-4" />
              </button>
            </div>
            
            {/* Placeholder for chart */}
            <div className="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium">{chart.title}</p>
                <p className="text-sm text-gray-500 mt-1">{chart.data}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Insights */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {userRole === 'Doctor' ? 'Patient Insights' :
             userRole === 'Patient' ? 'Health Insights' :
             userRole === 'HR Manager' ? 'Staff Insights' : 'System Insights'}
          </h3>
          
          <div className="space-y-4">
            {userRole === 'Doctor' && (
              <>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">High Patient Satisfaction</p>
                      <p className="text-sm text-green-700">Your satisfaction score increased by 0.2 points this month</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Increased Patient Volume</p>
                      <p className="text-sm text-blue-700">12% increase in new patients this month</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-yellow-900">Consultation Time Optimization</p>
                      <p className="text-sm text-yellow-700">Average consultation time reduced by 3 minutes</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {userRole === 'Patient' && (
              <>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Improving Health Score</p>
                      <p className="text-sm text-green-700">Your health score improved by 5% this month</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Medication Adherence</p>
                      <p className="text-sm text-blue-700">95% adherence rate - excellent progress!</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">Regular Check-ups</p>
                      <p className="text-sm text-purple-700">Consistent appointment attendance this quarter</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {userRole === 'HR Manager' && (
              <>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">High Performance Scores</p>
                      <p className="text-sm text-green-700">Average performance increased by 0.3 points</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Low Turnover Rate</p>
                      <p className="text-sm text-blue-700">Turnover decreased by 0.5% this quarter</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">Training Completion</p>
                      <p className="text-sm text-purple-700">98% completion rate for mandatory training</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {userRole === 'Admin' && (
              <>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Excellent System Uptime</p>
                      <p className="text-sm text-green-700">99.9% uptime maintained this month</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Growing User Base</p>
                      <p className="text-sm text-blue-700">23 new users added this week</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">Revenue Growth</p>
                      <p className="text-sm text-purple-700">15% increase in monthly revenue</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h3>
          <div className="space-y-4">
            {userRole === 'Doctor' && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Today's Patients</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-semibold">67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Rating</span>
                  <span className="font-semibold">4.9/5</span>
                </div>
              </>
            )}

            {userRole === 'Patient' && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Appointments</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lab Results</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Medications</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Health Score</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
              </>
            )}

            {userRole === 'HR Manager' && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Staff</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">New Hires</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Open Positions</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Attendance</span>
                  <span className="font-semibold text-green-600">98.2%</span>
                </div>
              </>
            )}

            {userRole === 'Admin' && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Users</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Sessions</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">API Calls</span>
                  <span className="font-semibold">45.6K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;