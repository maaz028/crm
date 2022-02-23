import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: 'dashboard',

        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./activities/activities.module').then(
            (m) => m.ActivitiesModule
          ),
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./compaign/compaign.module').then(
            (m) => m.CompaignModule
          ),
      },
      {
        path: 'opportunities',
        loadChildren: () =>
          import('./opportunites/opportunites.module').then(
            (m) => m.OpportunitesModule
          ),
      },

      {
        path: 'blank-page',
        loadChildren: () =>
          import('./blankpage/blankpage.module').then((m) => m.BlankpageModule),
      },
      {
        path: 'form-basic-inputs',
        loadChildren: () =>
          import('./formbasicinputs/formbasicinputs.module').then(
            (m) => m.FormbasicinputsModule
          ),
      },
      {
        path: 'form-horizontal',
        loadChildren: () =>
          import('./formhorizontal/formhorizontal.module').then(
            (m) => m.FormhorizontalModule
          ),
      },
      {
        path: 'form-input-groups',
        loadChildren: () =>
          import('./forminputgroups/forminputgroups.module').then(
            (m) => m.ForminputgroupsModule
          ),
      },
      {
        path: 'form-vertical',
        loadChildren: () =>
          import('./formvertical/formvertical.module').then(
            (m) => m.FormverticalModule
          ),
      },
      {
        path: 'mail-view',
        loadChildren: () =>
          import('./mailview/mailview.module').then((m) => m.MailviewModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'tables-basic',
        loadChildren: () =>
          import('./tablesbasic/tablesbasic.module').then(
            (m) => m.TablesbasicModule
          ),
      },
      {
        path: 'data-tables',
        loadChildren: () =>
          import('./tablesdatatables/tablesdatatables.module').then(
            (m) => m.TablesdatatablesModule
          ),
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('./companies/companies.module').then((m) => m.CompaniesModule),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'deals-kanban-view',
        loadChildren: () =>
          import('./dealskanbanview/dealskanbanview.module').then(
            (m) => m.DealskanbanviewModule
          ),
      },
      {
        path: 'deals',
        loadChildren: () =>
          import('./deals/deals.module').then((m) => m.DealsModule),
      },
      {
        path: 'emaill',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'form-mask',
        loadChildren: () =>
          import('./formmask/formmask.module').then((m) => m.FormmaskModule),
      },
      {
        path: 'form-validation',
        loadChildren: () =>
          import('./formvalidation/formvalidation.module').then(
            (m) => m.FormvalidationModule
          ),
      },
      {
        path: 'leads-dashboard',
        loadChildren: () =>
          import('./leadsdashboard/leadsdashboard.module').then(
            (m) => m.LeadsdashboardModule
          ),
      },
      {
        path: 'leads-kanban-view',
        loadChildren: () =>
          import('./leadskanbanview/leadskanbanview.module').then(
            (m) => m.LeadskanbanviewModule
          ),
      },
      {
        path: 'leads',
        loadChildren: () =>
          import('./leads/leads.module').then((m) => m.LeadsModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacypolicy/privacypolicy.module').then(
            (m) => m.PrivacypolicyModule
          ),
      },
      {
        path: 'projects-dashboard',
        loadChildren: () =>
          import('./projectsdashboard/projectsdashboard.module').then(
            (m) => m.ProjectsdashboardModule
          ),
      },
      {
        path: 'projects-kanban-view',
        loadChildren: () =>
          import('./projectskanbanview/projectskanbanview.module').then(
            (m) => m.ProjectskanbanviewModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('./terms/terms.module').then((m) => m.TermsModule),
      },
      { path: 'company-setting', loadChildren: () => import('./company-setting/company-setting.module').then(m => m.CompanySettingModule) },
      { path: 'sales-person', loadChildren: () => import('./sales-person/sales-person.module').then(m => m.SalesPersonModule) },
      { path: 'shipping-method', loadChildren: () => import('./shipping-method/shipping-method.module').then(m => m.ShippingMethodModule) },
    ],
  },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}
