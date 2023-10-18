// import { mockButtonCategory } from 'helpers'
import { ReactComponent as AddressSVG } from '../../assets/svg/address-page.svg'
import { ReactComponent as VesselSVG } from '../../assets/svg/airplane-page.svg'
import { ReactComponent as BankSVG } from '../../assets/svg/bank-page.svg'
import { ReactComponent as CompanySVG } from '../../assets/svg/company-page.svg'
import { ReactComponent as WalletSVG } from '../../assets/svg/crypto-page.svg'
import { ReactComponent as PersonSVG } from '../../assets/svg/person-page.svg'
import { ReactComponent as SecuritySVG } from '../../assets/svg/security-page.svg'
import './BulkCategorySelector.style.scss'

export function BulkCategorySelector () {
  return (
    <ul className='bulk-category__list'>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><AddressSVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Address</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><VesselSVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Vessels</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><BankSVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Bank Account</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><CompanySVG width={64} height={64} className='bulk-category__icon' /><p className=''>Company, Organization</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><WalletSVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Crypto Wallet</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><PersonSVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Person</p></button>
      </li>
      <li className='bulk-category__item'>
        <button type='button' className='bulk-category__button'><SecuritySVG width={64} height={64} className='bulk-category__icon' /><p className='bulk-category__button-text'>Security</p></button>
      </li>
    </ul>
  )
}
